# BitBucket User's Favourite Programming Language

This application allows users to enter an arbitrary BitBucket username and be presented with a best guess of the BitBucket user's favourite programming language.

I've used https://api.bitbucket.org/2.0/repositories/username API in Detail component to get repos' laguages 
that signifies the most-used programming language in the repos. 
If no languages are detected that would be null.

### Documentation
Documentation for the BitBucket API can be found at [https://developer.atlassian.com/cloud/bitbucket/rest/api-group-repositories/#api-group-repositories](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-repositories/#api-group-repositories)

### API
https://api.bitbucket.org/2.0/repositories/username

### Reference
[About repository languages](https://developer.atlassian.com/)