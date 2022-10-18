import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';



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
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='titulo' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name="lname"
                        value={description}
                        placeholder='descrição'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name="lname"
                        value={price}
                        placeholder='preço'
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={()=>sendDataToAPI()}>Update</Button>
            </Form>
        </div>
    )
}
