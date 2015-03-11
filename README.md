# @mentions in Meteor Apps

To install
----------

```sh
$ meteor add tsega:mentions
```

To use
------

On the client, for `rendered` event of the template you have your text box in add the following code:

```js
Template.myTemplateForm.rendered = function(){
    $("input").mention({
        delimiter: '@',
        users: Meteor.users.find().fetch()
    });
};

`Meteor.users.find().fetch()` part should not be used on a production app or an app that has many users.

## Improvements to the package are very welcome!
