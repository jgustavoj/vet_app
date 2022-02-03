# vet_app

## Initilizing project

- When first starting new project make sure to initilize git with command 

    `git init` 

- Create environment `venv`

    `python -m venv venv`

- Activate environment; this will change depending on your system 

    If you are using git bash you need to give it the command

  `source venv/Scripts/activate`

if you are using CMD then the activate.bat should work fine.

.bat files can't run in git bash



## Tests

[Pytest](https://pytest.org/) is used for testing. 

Run `pip install pytest` to install pytest. 

Run tests with `python -m pytest` from the repository root directory. Note this must be used rather than just `pytest` 

