@minLength(1)
param TtechName string

@allowed([
  'Free'
  'Shared'
  'Basic'
  'Standard'
])
param TtechSKU string = 'Free'

@allowed([
  '0'
  '1'
  '2'
])
param TtechWorkerSize string = '0'

var TaylorName = 'Taylorfield'

resource Ttech 'Microsoft.Web/serverfarms@2014-06-01' = {
  name: TtechName
  location: resourceGroup().location
  tags: {
    displayName: 'Ttech'
  }
  properties: {
    name: TtechName
    sku: TtechSKU
    workerSize: TtechWorkerSize
    numberOfWorkers: 1
  }
  dependsOn: []
}

resource Taylor 'Microsoft.Web/sites@2015-08-01' = {
  name: TaylorName
  location: resourceGroup().location
  tags: {
    'hidden-related:${resourceGroup().id}/providers/Microsoft.Web/serverfarms/${TtechName}': 'Resource'
    displayName: 'Taylor'
  }
  properties: {
    name: TaylorName
    serverFarmId: Ttech.id
  }
}
