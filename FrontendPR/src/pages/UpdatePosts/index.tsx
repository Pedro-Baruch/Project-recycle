import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Content, Div, Form, Input, Label } from './styles';
import Button from '../../Components/Button';



export function Update() {
    
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    

    


    var url_atual = window.location.href;
    var splitUrl = url_atual.split("/")
     var finalIndex= splitUrl[4]
    


    function sendDataToAPI  ()  {
          axios.put(`http://localhost:3000/posts/${finalIndex}`, {
              title,
              description,
              price
          })
      }
    
    
    
    return (
        <Content>
            <Form>
                <Div>
                    <Label style={{paddingBottom:'25px'}}>Title:</Label>
                    <Input name="name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='titulo' />
                </Div>
                <Div>
                    <Label>Description:</Label>
                    <Input
                        name="lname"
                        value={description}
                        placeholder='descrição'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Div>
                <Div>
                    <Label>Price:</Label>
                    <Input
                        name="lname"
                        value={price}
                        placeholder='preço'
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Div>
                <Button children='update' height='30px' width='60px' onClick={()=>sendDataToAPI()}/>
            </Form>
        </Content>
    )
}
