## clone project
```
git clone <<url>>
```

## create new branch
```
git branch <<branchname>>
```

## check availables branches
```
git branch
```

## switch to a specific branch
```
git checkout <<branchname>>
```

## prepare files to be commit
"." is a special character to pass all modified files
```
git add .
```

## commit
```
git commit -m "<<message>>"
```

## upload changes to remote repostory
```
git push
```

## merge
How to merge my changes from other branch

```
git checkout main
git merge origin <<branch>>
```