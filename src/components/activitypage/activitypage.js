import React, { useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { getFirestore, collection, getDocs } from "firebase/firestore";

const ActivityPage = () => {

  const [messages, setMessages] = useState();

  const db = getFirestore();
  const colRef = collection(db,'chats/user1/messages');


  getDocs(colRef)
    .then((snapshot) =>{
      let tempmessages=[]
      snapshot.docs.forEach((doc) =>{
          tempmessages.push({...doc.data(), id: doc.id});
        })
        // tempmessages.sort('timestamp');
        console.log(tempmessages);
        setMessages(tempmessages);
      })
    .catch(err => {
      console.log(err);
    })

    const columns = [
      { field: 'direction', headerName: 'Direction', width: 100, editable: false },
      { field: 'sender', headerName: 'Sender', width: 100, editable: false },
      { field: 'message', headerName: 'Text', width: 1000, editable: false },
    ];

  return (
    <div className="container">
      <div className="text-zone">
        <h1> Chat History Statistics</h1>
        <Box sx={{ height: '80%', width: '100%', backgroundColor: "white" }}>
          <DataGrid
            rows={messages}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 15,
                },
              },
            }}
            pageSizeOptions={[15]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
};

export default ActivityPage;
