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
     In the validateEmail, I declare a regex email form to validate if the user input is an email format aside
     from this I check if it is null. Same in the password checking if it is null and if it's 6-12 length. I also
     save the user in the async to remember the date saved; email and password.
     
     
     
     
     
     
     
