# Blog Post API

## Blog Posts [/blog-posts]

### Create a Blog Post [POST]

+ Request (application/json)

    + Headers
    
        Authorization: Bearer {access_token}
        
    + Body
        
        {
            "title": "Sample Blog Post",
            "content": "This is the content of the blog post.",
            "author": "John Doe"
        }

+ Response 201 (application/json)

    + Headers
    
        Location: /blog-posts/{id}
        
    + Body
        
        {
            "id": 1,
            "title": "Sample Blog Post",
            "content": "This is the content of the blog post.",
            "author": "John Doe",
            "createdAt": "2023-07-05T12:00:00Z",
            "updatedAt": "2023-07-05T12:00:00Z"
        }

### Get All Blog Posts [GET]

+ Request (application/json)

    + Headers
    
        Authorization: Bearer {access_token}

+ Response 200 (application/json)

    + Body
        
        [
            {
                "id": 1,
                "title": "Sample Blog Post",
                "content": "This is the content of the blog post.",
                "author": "John Doe",
                "createdAt": "2023-07-05T12:00:00Z",
                "updatedAt": "2023-07-05T12:00:00Z"
            },
            {
                "id": 2,
                "title": "Another Blog Post",
                "content": "This is another blog post.",
                "author": "Jane Smith",
                "createdAt": "2023-07-05T13:00:00Z",
                "updatedAt": "2023-07-05T13:00:00Z"
            }
        ]

## Blog Post [/blog-posts/{id}]

### Get a Blog Post [GET]

+ Request (application/json)

    + Headers
    
        Authorization: Bearer {access_token}

+ Response 200 (application/json)

    + Body
        
        {
            "id": 1,
            "title": "Sample Blog Post",
            "content": "This is the content of the blog post.",
            "author": "John Doe",
            "createdAt": "2023-07-05T12:00:00Z",
            "updatedAt": "2023-07-05T12:00:00Z"
        }

### Update a Blog Post [PUT]

+ Request (application/json)

    + Headers
    
        Authorization: Bearer {access_token}
        
    + Body
        
        {
            "title": "Updated Blog Post",
            "content": "This is the updated content of the blog post."
        }

+ Response 200 (application/json)

    + Body
        
        {
            "id": 1,
            "title": "Updated Blog Post",
            "content": "This is the updated content of the blog post.",
            "author": "John Doe",
            "createdAt": "2023-07-05T12:00:00Z",
            "updatedAt": "2023-07-05T14:00:00Z"
        }

### Delete a Blog Post [DELETE]

+ Request (application/json)

    + Headers
    
        Authorization: Bearer {access_token}

+ Response 204

