console.log("heyy..learning how to connect to the database");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata={
  
    "login": "himanshuchopra5651",
    "id": 130498009,
    "node_id": "U_kgDOB8c92Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/130498009?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/himanshuchopra5651",
    "html_url": "https://github.com/himanshuchopra5651",
    "followers_url": "https://api.github.com/users/himanshuchopra5651/followers",
    "following_url": "https://api.github.com/users/himanshuchopra5651/following{/other_user}",
    "gists_url": "https://api.github.com/users/himanshuchopra5651/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/himanshuchopra5651/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/himanshuchopra5651/subscriptions",
    "organizations_url": "https://api.github.com/users/himanshuchopra5651/orgs",
    "repos_url": "https://api.github.com/users/himanshuchopra5651/repos",
    "events_url": "https://api.github.com/users/himanshuchopra5651/events{/privacy}",
    "received_events_url": "https://api.github.com/users/himanshuchopra5651/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following":  0,
    "created_at": "2023-04-11T18:12:48Z",
    "updated_at": "2024-05-04T04:39:13Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('chopra5651')
})

app.get('/instagram',(req,res)=>{
    res.send('himanshuxchopra')
})

app.get('/snap',(req,res)=>{
    res.send('chopra_5651')
})

app.get('/github',(req,res)=>{
  res.json(githubdata)
})


app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
}) 
