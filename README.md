# Express Server

An app for practicing deployment to Heroku
Created by Marquesa Asmussen

## Installation

- run npm init -y
- run npm install dotenv express jest

## Summary of Problem Domain

We wanted to have more practice with deploying servers to a live dev and production branch

## Links to application deployment

- dev branch deployed [site](https://marquesa-server-deploy-dev.herokuapp.com/)
- main branch deployed [site](https://marquesa-server-deploy-prod.herokuapp.com/)
- GitHub Actions [link](https://github.com/MarquesaAsmussen/server-deployment-practice/actions)
-

## Include embedded UML

## Talk about your routes

## Routes

- HTTP GET

  - Path: /repeat
    - responds with the last string used in the post route `/talk`.

- HTTP POST
  - Path: /talk
    - Accept a string.
      - responds with a string in all caps.
