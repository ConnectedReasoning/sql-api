# SQL-API
SImple mySQL api using node


---
##   https://sql-api-cr.herokuapp.com/api/v1/category
###    GET
#### *request*
  `curl https://sql-api-cr.herokuapp.com/api/v1/category `

  #### *response*
    [
      {
        "id": 1,
        "title": "main",
        "description": "main description"
      },
      {
          "id": 3,
          "title": "third category",
          "description": "this is third catalog"
      }
    ] `
---
### POST
  #### *request*
     curl -d '{"title": "your title", "description": "your description" }'  -H "Content-Type: application/json" -X POST https://sql-api-cr.herokuapp.com/api/v1/category `
   
#### *request*
    [{
        "status": "insert successful"
    }]
    
### PUT
  #### *request*

     curl -d '{"id":1, "title": "updated title", "description": "updated description"}'  -H "Content-Type: application/json" -X PUT https://sql-api-cr.herokuapp.com/api/v1/category `
   
  #### *response*
    [{
        "status": "update successful"
    }]
    

### DELETE
  #### *request*`
  `curl https://sql-api-cr.herokuapp.com/api/v1/category/2`

    #### *response*
    [{
      "status": "delete successful"
    }]

---
##    https://sql-api-cr.herokuapp.com/api/v1/task
###    GET
  #### *request*
    `curl https://sql-api-cr.herokuapp.com/api/v1/task `
  #### *response*
  
   `[{
        "id": 5,
        "title": "second task",
        "description": "this is the second task.",
        "assigned": "myself",
        "categoryID": 1
    },
    {
        "id": 7,
        "title": "your title",
        "description": "your description",
        "assigned": "assignee name",
        "categoryID": 1
    }]`
---
### POST
  #### *request*
     curl -d '{"title": "your title", "description": "your description", "assigned": "assignee name", "categoryID": 1}'  -H "Content-Type: application/json" -X POST https://sql-api-cr.herokuapp.com/api/v1/task `
   
   #### *response*
    [{
        "status": "insert successful"
    }]
    
### PUT
  #### *request*
     curl -d '{"id":1, "title": "updated title", "description": "updated description"}'  -H "Content-Type: application/json" -X PUT https://sql-api-cr.herokuapp.com/api/v1/task `
   
   #### *response*
    [{
        "status": "update successful"
    }]
    
### DELETE
  #### *request*`
  `curl https://sql-api-cr.herokuapp.com/api/v1/task/2`

    #### *response*
    [{
    "status": "delete successful"
    }]