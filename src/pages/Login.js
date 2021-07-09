import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import * as authTokenActions from '../actions/authTokenActions';
import Error from '../components/Error';

const Login = props => {
  const [username, setUsername] = useState('challenge@maniak.co');
  const [password, setPassword] = useState('maniak2020');
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const history = useHistory();

  const doLogin = async () => {
    await props.getAuthToken(username, password);
    if (props.authToken) {
      history.go('/ImageList');
    }
  };

  useEffect(async () => {
    console.log(props);
    try {
      await getAuthTokenFromStorage();
    } catch (error) {}
    if (props.authToken) history.push('/ImageList');
  }, [props]);

  return (
    <View style={styles.main}>
      <Text style={styles.loginText}>Log In</Text>
      <Text style={styles.welcomeText}>Welcome back</Text>

      <Text style={styles.inputLabel}>EMAIL</Text>
      <TextInput style={styles.input} onChangeText={text => setUsername(text)}>
        {username}
      </TextInput>

      <Text style={styles.inputLabel}>PASSWORD</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        secureTextEntry={hiddenPassword}>
        {password}
      </TextInput>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => doLogin()}>
        <Text style={styles.buttonTxt}>LOG IN</Text>
      </TouchableOpacity>

      {props.error !== '' && <Error error={props.error} />}

      <View style={styles.loader}>
        {props.loading && <ActivityIndicator color="#0000ff" />}
      </View>

      <View style={styles.signupTxt}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupTouchable}> Sign up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 80,
    padding: 30,
  },
  loginText: {
    marginTop: 10,
    fontSize: 36,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 40,
  },
  inputLabel: {
    marginTop: 10,
    fontSize: 14,
  },
  input: {
    fontSize: 14,
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderRadius: 2,
    backgroundColor: '#F5F5FA',
  },
  forgotPassword: {
    textAlign: 'right',
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#373A4D',
    padding: 16,
    borderRadius: 2,
  },
  buttonTxt: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    margin: 30,
  },
  errorText: {
    color: 'red',
  },
  signupTxt: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 30,
  },
  signupTouchable: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

const mapStateToProps = reducers => {
  return reducers.authTokenReducer;
};

export default connect(mapStateToProps, authTokenActions)(Login);
