### Business API

This API provides endpoints to manage businesses and retrieve information about nearby merchants.

#### Starting the Server

To start the development server, run the following command:

```bash
yarn dev
```

To start the production server, use the following command:

```bash
yarn build (already built)

yarn start
```

### Create Business

To create a new business, send a POST request to the following endpoint:

```
POST https://big-data-taupe.vercel.app/api/v1.0/business
```

#### Request Body Example

```json
{
    "name": "Sample Business5",
    "address": "123 Main Street",
    "city": "Sample City",
    "state": "AB",
    "postal_code": "12345",
    "latitude": 43.7130,
    "longitude": -70.016,
    "stars": 4.9,
    "review_count": 900,
    "is_open": 1,
    "attributes": {
        "facility": "facility3",
        "attribute2": "value2"
    },
    "categories": [
        "Category1",
        "Category2"
    ],
    "hours": {
        "Monday": "9:00 AM - 5:00 PM",
        "Tuesday": "9:00 AM - 5:00 PM",
        "Wednesday": "9:00 AM - 5:00 PM",
        "Thursday": "9:00 AM - 5:00 PM",
        "Friday": "9:00 AM - 5:00 PM",
        "Saturday": "Closed",
        "Sunday": "Closed"
    }
}
```

#### Response Example

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Business created successfully!",
    "data": {
        "_id": "65f37403186d2dcef92c4efd",
        "business_id": "ltrs0a8xck2kavsheyr",
        "name": "Sample Business5",
        "address": "123 Main Street",
        "city": "Sample City",
        "state": "AB",
        "postal_code": "12345",
        "latitude": 43.713,
        "longitude": -70.016,
        "stars": 4.9,
        "review_count": 900,
        "is_open": 1,
        "attributes": {
            "facility": "facility3",
            "attribute2": "value2"
        },
        "categories": [
            "Category1",
            "Category2"
        ],
        "hours": {
            "Monday": "9:00 AM - 5:00 PM",
            "Tuesday": "9:00 AM - 5:00 PM",
            "Wednesday": "9:00 AM - 5:00 PM",
            "Thursday": "9:00 AM - 5:00 PM",
            "Friday": "9:00 AM - 5:00 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        "__v": 0
    }
}

```

### Nearby Merchants

To get a list of nearby merchants, send a POST request to the following endpoint:

```
POST https://big-data-taupe.vercel.app/api/v1.0/business/nearby-merchants
```

#### Query Parameters

- `sortBy`: (Optional) Sorts the nearby merchants by `ratings` or `review_recommendations`.

#### Request Body Example

```json
{
    "latitude": 40.7130,
    "longitude": -70.016,
    "maxDistance": 5
}
```

#### Response Example

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Nearby merchants retrieved successfully!",
    "data": [
        {
            "business_id": "ltq3sljxrc5pb1w613",
            "name": "Sample Business",
            "latitude": 40.7128,
            "longitude": -74.006,
            "stars": 4.5,
            "review_count": 100,
            "attributes": {
                "attribute1": "value1",
                "attribute2": "value2"
            }
        },
        {
            "business_id": "ltrgverjsumfkopjezf",
            "name": "Sample Business",
            "latitude": 40.7128,
            "longitude": -74.006,
            "stars": 4.5,
            "review_count": 100,
            "attributes": {
                "attribute1": "value1",
                "attribute2": "value2"
            }
        },
        // Other nearby merchants...
    ]
}

```

#### Filtering Nearby Merchants

You can filter nearby merchants by ratings, facilities, or a combination of both.

#### Filtering by Ratings

To filter nearby merchants by ratings, use the following endpoint:

```
POST https://big-data-taupe.vercel.app/api/v1.0/business/nearby-merchants?ratings=4.9
```

#### Filtering by Facilities

To filter nearby merchants by facilities, use the following endpoint:

```
POST https://big-data-taupe.vercel.app/api/v1.0/business/nearby-merchants?facilities=f
```

### Get Merchant Details

To retrieve details about a specific merchant, send a GET request to the following

 endpoint, replacing `{business_id}` with the actual ID of the merchant:

```
GET https://big-data-taupe.vercel.app/api/v1.0/business/nearby-merchants/{business_id}
```

#### Response Example

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Merchant details retrieved successfully",
    "data": {
        "_id": "65f32e7423fd278946a0216b",
        "business_id": "ltrhemmtas6sf5rxjpg",
        "name": "Sample Business3",
        "address": "123 Main Street",
        "city": "Sample City",
        "state": "AB",
        "postal_code": "12345",
        "latitude": 40.713,
        "longitude": -74.016,
        "stars": 4.5,
        "review_count": 100,
        "is_open": 1,
        "attributes": {
            "attribute1": "value1",
            "attribute2": "value2"
        },
        "categories": [
            "Category1",
            "Category2"
        ],
        "hours": {
            "Monday": "9:00 AM - 5:00 PM",
            "Tuesday": "9:00 AM - 5:00 PM",
            "Wednesday": "9:00 AM - 5:00 PM",
            "Thursday": "9:00 AM - 5:00 PM",
            "Friday": "9:00 AM - 5:00 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        "__v": 0
    }
}
```