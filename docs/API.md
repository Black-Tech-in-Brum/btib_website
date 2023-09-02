## API Documentation

This documentation provides details about the endpoints of the Strapi API for different content types: `landing-page`, `menu`, `footer`, and `social-media`.

### `landing-page` Endpoint

#### GET /api/landing-page

**Description**: Retrieve data for all the pages to be included in a single-page application.

**Example Request**:

```http
GET /api/landing-page
```

**Example Response**:

```json
{
  ...
  "attributes": {
    ...
    "pages": {
        "data": [
            {
                ...
                "attributes": {
                    ...
                }
            },
            {
                ...
                "attributes": {
                    ...
                }
            },
            ...
        ]
    }
    ...
  }
  ...
}
```

### `menu` Endpoint

#### GET /api/menu

**Description**: Retrieve all the links to be included in the Navbar.

**Example Request**:

```http
GET /api/menu
```

**Example Response**:

```json
{
  ...
  "attributes": {
    ...
    "pages": {
        "data": [
            {
                ...
                "attributes": {
                    "title": "Page Title",
                    "slug": "/page-slug"
                }
            },
            {
                ...
                "attributes": {
                    "title": "Page Title",
                    "slug": "/page-slug"
                }
            },
            ...
        ]
    }
    ...
  }
  ...
}
```

### `footer` Endpoint

#### GET /api/footer

**Description**: Retrieve the body of text to be included in the footer.

**Example Request**:

```http
GET /api/footer
```

**Example Response**:

```json
{
  ...
  "attributes": {
    "body": "Additional information about the website"
  }
}
```

### `social-media` Endpoint

#### GET /api/social-media

**Description**: Retrieve social media accounts and links to be used in various components.

**Example Request**:

```http
GET /api/social-media
```

**Example Response**:

```json
{
  ...
  "attributes": {
    "discord": "https://discord.gg/invite/XXXXXX",
    "linkedin": "https://linkedin.com/XXXXXX"
  }
}
```
