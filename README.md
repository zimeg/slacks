# HERMES-5043: Uninstall vs Delete

This tests trigger and datastore behavior when uninstalling and deleting apps.

## Testing steps

### Setup

* Install the app and create a trigger (`run` or `deploy`)
* Add a record to the datastore (via the trigger)
* Verify the record is added with the following:


```sh
$ hermes datastore get '{"datastore": "SampleObjects", "id": "1"}'
```

### Uninstall

* Uninstall the app
* Try tripping a trigger (it should fail)
* Try getting the record from the datastore (it should fail)

### Re-install

* Re-install the app (`run` or `deploy`)
* Try tripping a trigger (it should fail). A new trigger is needed.
* Try getting the record from the datastore (it should work)!

### Delete

* Delete the app
* Repeat uninstall checks

### Re-install

* Re-install the app (`run` or `deploy`)
* Repeat re-install checks. Both should fail.