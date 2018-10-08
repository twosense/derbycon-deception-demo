## Deception Technology with Behavioral Biometrics Demo

A simple site that demonstrates the combination of keystroke dynamics for authentication with deception technology techniques.

## Talk and Demo
See the talk for an explanation: https://www.youtube.com/watch?v=CkFEDPPg9L0
Link to site running on Heroku: https://derbycon-deception-demo.herokuapp.com/

## Overview

This demo authenticates you by how you type the passsword (the password itself is on the login page).  If it deems you authorized, you will see the real account balance of $35 and be able to make a transfer.  If you are deemed unauthorized, you will see a much higher balance (you are in a honeypot) and your transfers will only be blocked after you attempt to make one. 

## DIY

Requirements:
  - Node (v8.+)
  - NPM

To run:
  - Clone repo
  - From root dir, run `npm install`
  - After installing dependencies, run `npm start` to start the local dev server
