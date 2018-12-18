import React from 'react';
import { 
          StyleSheet, 
          Text,
          View,
          Image,
          TextInput, 
          TouchableOpacity,
          KeyboardAvoidingView,
          AsyncStorage,
          CheckBox
        } from 'react-native';
export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      email:'',
      password:'',
      emailval: '',
      passwordval:'',
      emailset:false,
      passwordset:false,
      remember: false
    }
    this.getSavedUser()
  }

  validateEmail(email){
    emailform = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i   
    if(email == ''){
          this.setState({emailval: 'Email ky null'})
          this.setState({emailset:false})
        }else{
          if(!emailform.test(email)){
            this.setState({emailval: 'Invalid Email'})
            this.setState({emailset:false})
          }
          else
          {
            this.setState({emailval: ''})
            this.setState({emailset:true})
          }
    }
    this.setState({email:email})
  }

  validatePassword(password)
  {
    if(password == ''){
          this.setState({passwordval:'Password ku null'})
          this.setState({passwordset:false})
        }else{
          if(password.length < 6 || password.length > 12){
           this.setState({passwordval:"please use at least 6 - 12 characters"})
           this.setState({passwordset:false})
          }
          else{
            this.setState({passwordval:''})
            this.setState({passwordset:true})
          }
        }
        this.setState({password:password})
  }

  LoginSuccess(email, password, remeber)
  {
    alert('Login Successful!')
    if(remeber){
      this.saveUser(email, password)
    }
    else
    {
      this.clearSaveuser()
    }
  }

  saveUser(email, password){
    AsyncStorage.setItem('email', email)
    AsyncStorage.setItem('password', password)
  }

  clearSaveuser = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
    }
    catch(error) {
      alert('error sa clear saved user '+ error)
    }
  }

  getSavedUser = async () => {
    try{
      let email = await AsyncStorage.getItem('email');
      let password = await AsyncStorage.getItem('password');
      if(email != null && password != null){
        this.validateEmail(email)
        this.validatePassword(password)
      }
    }
    catch(error){
      alert('error at get save user' + error);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./src/images/Logo.png')}
          />
        </View>

        <View style={styles.formContainer}>
          
            <Text
              style={styles.inputlabel}
            >
              Email:
            </Text>

            <TextInput 
            style={styles.input}
            onChangeText={(email)=>this.validateEmail(email)}
            placeholder=" Enter your email address"
            >{this.state.email}</TextInput>
            <Text
              style={styles.errormessage}
            >{this.state.emailval}
            </Text>
            <Text
              style={styles.inputlabel}>
              Password:
            </Text>

            <TextInput 
              style={styles.input}
              placeholder=" Enter your password"
              onChangeText = {(password)=>this.validatePassword(password)}
            >{this.state.password}</TextInput>
            <Text
              style={styles.errormessage}
            >{this.state.passwordval}
            </Text>


            <CheckBox
              title='Remember Me'
              style={styles.checkboox}
              value={this.state.remember}
              onValueChange={() => this.setState({ remember: !this.state.remember })}
            />
            <Text
              style={styles.checklabel}
            >Remember Me
            </Text>

            <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => this.LoginSuccess(this.state.email, this.state.password, this.state.remember)}
            disabled={!this.state.emailset || !this.state.passwordset}
            > 
            <Text 
              style={styles.btnLabel}> 
              Sign In 
            </Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#faf8ff',
  },
  logoContainer:{
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 80,
  },
  logo:{
    height: 210
  },
  formContainer:{
    marginBottom: 30
  },
  input:{
    height: 40,
    backgroundColor: '#faf8ff',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: '#9d81d0',
    borderRadius: 5
  },
  inputlabel:{
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4
  },
  buttonContainer:{
    backgroundColor: '#704db2',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15
  },
  btnLabel:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,

  },
  errormessage: {
    color: 'red',
    marginLeft: 20,
    fontSize:14
  },
  checkboox:{
    marginLeft: 10
  },
  checklabel:{
    marginTop: -26,
    marginLeft: 40,
    fontSize: 16,
    fontWeight: '300'
  }
});
