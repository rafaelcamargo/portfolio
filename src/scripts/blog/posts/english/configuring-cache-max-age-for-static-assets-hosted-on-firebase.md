title: Configuring cache max age for static assets hosted on Firebase
date: 2024-04-29
description: Cache is a fundamental part of a strategy that aims to optimize website performance. For returning users, a good caching policy has the potential to speed up substantially its initial load. Discover in this post how to fine-tune the cache lifetime of static assets for a website hosted on Firebase.
keywords: cache, static assets, max-age, firebase, ttl

---

One of the most efficient ways to speed up a website performance when a visitor returns to that same website is by setting a long cache lifetime for static assets such as images, style sheets, and scripts.

A frequent recommendation provided by Lighthouse, a tool that measures website performance in topics such as FCP (First Contentful Paint), LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), among others, is that the website should serve static assets with an efficient cache policy. But what does an efficient cache policy entail? According to the Google Chrome documentation for developers, an efficient policy consists of caching for a period of [one year or more](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl#how_to_cache_static_resources_using_http_caching) static assets that are rarely changed.

![Image of the Lighthouse performance report recommending a better cache policy for static assets that rarely change](../../images/lighthouse-cache-max-age.jpg)  
_Lighthouse report recommending a better cache policy._

Once the importance of defining a long TTL (Time To Live) for such assets is understood, we then need to determine exactly where we should make this change — in other words, find out where in the engine this particular screw that needs to be tightened or loosened is located. I'll use a practical example here referring to Firebase hosting service. Firebase is a service maintained by Google, its free-tier is very generous, which makes it very inviting for those who need to put a static site up and running quickly and easily at no cost.

Practically all Firebase settings within your project will be located in a file called `firebase.json`. This file has a key called `hosting`, where configurations specifically related to hosting your website are grouped. It is in this group that you should include your definitions for static assets cache. Therefore, add a key called `headers` within `hosting`. `headers` must be an array of objects structured as follows:

```json
{
  "source": "**/*.@(jpg|jpeg|gif|png|js|css|svg|woff2)",
  "headers": [
    { "key": "Cache-Control", "value": "max-age=31536000" }
  ]
}
```

The `source` key represents a glob responsible for restricting the headers defined in the `headers` key to a specific set of file extensions (.jpg, .jpeg, .gif, etc).

The only header defined in the above configuration is `Cache-Control` which has its value set to `max-age=31536000`. In other words, the max age defined for caches related to those respective file extensions is 31,536,000 seconds, or 1 year.

The final `firebase.json` file will look like this:
```json
{
  "hosting": {
    "headers": [{
      "source": "**/*.@(jpg|jpeg|gif|png|js|css|svg|woff2)",
      "headers": [
        {"key": "Cache-Control", "value": "max-age=31536000"}
      ]
    }]
  }
}
```

To learn more about Firebase hosting configurations, visit [this page](https://firebase.google.com/docs/hosting/full-config#firebase-json_example). There you will find various other configuration possibilities, such as redirects and rewrites.
