
app.factory('contactsService', function() {
 var contacts= 
 [
  {
    "firstName": "Mark",
    "familyName": "Zuckerberg",
    "email": "mark.zuckerberg@facebook.com",
    "image": "http://images.forbes.com/media/lists/people/mark-zuckerberg_50x50.jpg"
  },
  {
    "firstName": "Bill",
    "familyName": "Gates",
    "email": "bill.gates@microsoft.com",
    "image": "http://images.forbes.com/media/lists/people/bill-gates_50x50.jpg"
  },
  {
    "firstName": "Steve",
    "familyName": "Jobs",
    "email": "steve.jobs@apple.com",
    "image": "http://images.forbes.com/media/lists/people/steve-jobs_50x50.jpg"
  },
  {
    "firstName": "Tim",
    "familyName": "Cook",
    "email": "tim.cook@apple.com",
    "image": "http://images.forbes.com/media/lists/people/tim-cook_50x50.jpg"
  },
  {
    "firstName": "Larry",
    "familyName": "Page",
    "email": "larry.page@google.com",
    "image": "http://images.forbes.com/media/lists/people/larry-page_50x50.jpg"
  },
  {
    "firstName": "Sergey",
    "familyName": "Brin",
    "email": "sergey.brin@google.com",
    "image": "http://images.forbes.com/media/lists/people/sergey-brin_50x50.jpg"
  },
  {
    "firstName": "Larry",
    "familyName": "Ellison",
    "email": "larry.ellison@oracle.com",
    "image": "http://images.forbes.com/media/lists/people/larry-ellison_50x50.jpg"
  },
  {
    "firstName": "Jeff",
    "familyName": "Bezos",
    "email": "jeff.bezos@amazon.com",
    "image": "http://images.forbes.com/media/lists/people/jeff-bezos_50x50.jpg"
  }
];

return{
  $get:function(){
    return contacts;
  }
};
  
});