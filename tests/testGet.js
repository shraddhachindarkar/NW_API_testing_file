module.exports = {
  "Retrieve API (GET)":''+ function (client) {
    var apiUrl = 'https://dog.ceo/api/breeds/list/all';
    client.apiGet(apiUrl, function (response) {
      console.log(response.body);
      var data = JSON.parse(response.body);
      console.log('---->' + data.message.bulldog);

      client.assert.equal(response.statusCode, 200, "200 OK");

      client.end();
    });

  },

  "Retrieve API for checking actual & expected ": function (client) {
    var apiUrl = 'https://dog.ceo/api/breeds/list/all';
    client.apiGet(apiUrl, function (response) {
      var data = JSON.parse(response.body);

      var Bulldogdata = data.message.bulldog;

      console.log('---->' + Bulldogdata.length);
      var res = Bulldogdata.length;
      client.assert.equal(res, 3, "This value is same ");

      var array_1 = new array_1("boston","french","English")
      var array_2 = data.message.message 
      for(i=0;i<res;i++)
      {
        for(j=0;j<res;j++)
        {
          if(array_1[i]==array_2[j])
          {
            client.assert.equal(array_1[i],array_2[j])
          }
        }
      }

      client.end();

    });
  }
};
