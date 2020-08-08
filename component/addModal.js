import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet,
FlatList,Image, Dimensions, Platform,TextInput
} from 'react-native';

import Modal from'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';


var screen = Dimensions.get('window');
export default class AddModal extends Component{
    constructor(props){
        super(props);
        this.state={
            newFoodName:'',
            newFoodDescription:'',
            newFoodImage:''
        };
    }

    showAddModal=()=> {
        this.refs.myModal.open ();
    }
    generateKey = (numberOfCharacters) => {
        return require ('random-string')({length: numberOfCharacters});
    }
    render(){
        return(
            <Modal
            ref={"myModal"}

            style={{
                justifyContent: 'center',
                borderRadius: Platform.OS === 'android' ? 30 : 0,
                shadowRadius: 10,
                width: screen.width - 60,
                height:310
            }}
            position='Center'
            backdrop={true}
            onClosed={() =>{
                //alert("Modal Ditutup")
            }}
            >
                <Text 
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#364049',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                }}
                >Tambah Daftar Menu Makanan Baru.</Text>
                <TextInput
                style={{
                    height: 40,
                    borderBottomColor:'#364049',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop:20,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
                onChangeText={(text) => this.setState({newFoodName:text})}
                placeholder="Tambahkan Menu Baru"
                value={this.state.newFoodName}
                />
                 <TextInput
                style={{
                    height: 40,
                    borderBottomColor:'#364049',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop:20,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
                onChangeText={(text) => this.setState({newFoodDescription:text})}
                placeholder="Tambahkan Deskripsi Menu"
                value={this.state.newFoodDescription}
                />

                <TextInput
                style={{
                    height: 40,
                    borderBottomColor:'#364049',
                    marginLeft: 30,
                    marginRight: 30,  
                    marginTop:20,  
                    marginBottom: 10,  
                    borderBottomWidth: 1,  
                }}  
                onChangeText={(text) => this.setState({newFoodImage:text})}
                placeholder="Tambahkan Gambar"  
                value={this.state.newFoodImage}  
                />  

                <Button
                style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: 'white'
                }}
                containerStyle={{
                    padding:8,
                    marginLeft: 70,
                    marginRight: 70,
                    height: 40,
                    borderRadius: 6,
                    backgroundColor: '#364049'
                }}
                onPress={() =>{
                    if(this.state.newFoodName.length == 0 || this.state.newFoodDescription.length ==0){
                        alert("Harap Diisi Ulang Kembali");
                        return;
                    }
                    const newKey =this.generateKey (24);
                    const newFood = {
                        key: newKey,
                        name : this.state.newFoodName,
                        imageUrl:this.state.newFoodImage,
                        description: this.state.newFoodDescription
                    };
                    flatListData.push(newFood);
                    this.props.parentFlatList.refreshFlatList(newKey);
                    this.refs.myModal.close();
                }}
                > Save</Button>
            </Modal>
        )
    }
}
