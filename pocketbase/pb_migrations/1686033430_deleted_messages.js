migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hcxdd2hqh2m6rga");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "hcxdd2hqh2m6rga",
    "created": "2023-06-04 12:46:29.152Z",
    "updated": "2023-06-06 06:36:56.522Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eo3bdk5h",
        "name": "users",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "nnvkvowc",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
