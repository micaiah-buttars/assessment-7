## Alternative Tools
### Continuous Integration
#### Jenkins
Jenkins is an open source CI tool available entirely for free for all levels of business.
What it may lack in built-in features, it makes up for in it's stellar integration capabilities.

Jenkins was released in 2011, and has easy-to-parse documentation. It makes for a stellar tool for those getting started with CI/CD or for monitoring small projects.

### Real-Time Error Monitoring
#### Sentry
Sentry is a widely used monitoring software that runs in a multitude of languages, allowing you to track errors anywhere in your stack.
It includes valuable information to ensure devs have the insight to properly fix an error rather than just putting a bandaid on it.
Such information includes: stack traces, user context, release data, and preceding events.  
Lastly, it comes complete with well fleshed-out documentation for each of it's integrated languages and platforms.

While it does not disclose it's age, it is used by Github, Disney, and Reddit, which speaks to it's reliability.


## Runtime Analysis
### Results
```
Results for the extraLargeArray
insert 1.011784451 s
append 7.466486 ms

Results for the largeArray
insert 7.94736 ms
append 831.651 μs

Results for the mediumArray
insert 335.318 μs
append 299.471 μs

Results for the smallArray
insert 16.307 μs
append 14.528 μs

Results for the tinyArray
insert 11.05 μs
append 6.638 μs
```

### Observations

The append function scales significantly better, remaining under 8ms of runtime even with the extra large array.
This is due to unshift being more memory intensive by having to modify the array's existing data every time a new value is written rather than simply tacking it onto the end in a new data slot.





