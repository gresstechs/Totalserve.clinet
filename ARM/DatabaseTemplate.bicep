@description('The administrator username of the SQL Server.')
param sqlAdministratorLogin string 

@description('The administrator password of the SQL Server.')
@secure()
param sqlAdministratorLoginPassword string

@description('Enable or disable Transparent Data Encryption (TDE) for the database.')
@allowed([
  'Enabled'
  'Disabled'
])
param transparentDataEncryption string = 'Enabled'

@description('Location for all resources.')
param location string = resourceGroup().location

var sqlServerName = 'gresstech'
var databaseName = 'gresstechdb'
var databaseEdition = 'Basic'
var databaseCollation = 'SQL_Latin1_General_CP1_CI_AS'
var databaseServiceObjectiveName = 'Basic'

resource sqlServer 'Microsoft.Sql/servers@2020-02-02-preview' = {
  name: sqlServerName
  location: location
  tags: {
    displayName: 'TaylorSQL'
  }
  properties: {
    administratorLogin: sqlAdministratorLogin
    administratorLoginPassword: sqlAdministratorLoginPassword
    version: '12.0'
  }
}

resource sqlServerName_database 'Microsoft.Sql/servers/databases@2020-02-02-preview' = {
  parent: sqlServer
  name: '${databaseName}'
  location: location
  tags: {
    displayName: 'Database'
  }
  properties: {
    edition: databaseEdition
    collation: databaseCollation
    requestedServiceObjectiveName: databaseServiceObjectiveName
  }
}

resource sqlServerName_databaseName_current 'Microsoft.Sql/servers/databases/transparentDataEncryption@2017-03-01-preview' = {
  parent: sqlServerName_database
  name: 'current'
  properties: {
    status: transparentDataEncryption
  }
}

resource sqlServerName_AllowAllMicrosoftAzureIps 'Microsoft.Sql/servers/firewallrules@2020-02-02-preview' = {
  parent: sqlServer
  name: 'AllowAllMicrosoftAzureIps'
  location: location
  properties: {
    endIpAddress: '0.0.0.0'
    startIpAddress: '0.0.0.0'
  }
}

output sqlServerFqdn string = sqlServer.properties.fullyQualifiedDomainName
output databaseName string = databaseName
