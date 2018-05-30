# sql-api
SImple mySQL api using node

# Base URL
https://sql-api-cr.herokuapp.com/api/v1

# TASK
# GET
   curl https://sql-api-cr.herokuapp.com/api/v1/task

# POST
  ## request
    curl -d '{"title": "your title", "description": "your description", "assigned": "assignee name", "categoryID": 1}  -H "Content-Type: application/json" -X POST https://sql-api-cr.herokuapp.com/api/v1/task
   
   ## response
      [
          {
              "id": 5,
              "title": "second task",
              "description": "this is the second task.",
              "assigned": "myself",
              "categoryID": 1
          }
      ]
    
# PUT

# DELETE
