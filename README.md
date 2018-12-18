# TechnicalTest
Examination

I import
          Text - I use this for the label and text for the project
          Image - I use this for the logo
          TextInput - I use this for the input data
          TouchableOpacity - I use this for the button
          KeyboardAvoidingView - I use this to adjust keyboard and set the view by padding
          AsyncStorage - I use this store local data in the project for the remember me
          CheckBox - I use this for the remember me
          
In the project
      In the constructor i declare in the state
          email:'',
          password:'',
          emailval: '',
          passwordval:'',
          emailset:false,
          passwordset:false,
          remember: false
     this is to get the data and to validate the data using boolean true or false.
     
     In the validateEmail, I declare a regex email form to validate the user input if it is email format 
     emailform = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i 
     aside from this I check if it is null.
     
     Same in the password, checkingi if null and if its 6-12 length
     
     I also save user in the async to remember the data email and password.
     
     
