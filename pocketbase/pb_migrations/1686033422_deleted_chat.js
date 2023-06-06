migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7cscqaunwe3begv");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "7cscqaunwe3begv",
    "created": "2023-06-04 12:43:07.305Z",
    "updated": "2023-06-04 12:48:39.740Z",
    "name": "chat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "shluqeqf",
        "name": "users",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
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
