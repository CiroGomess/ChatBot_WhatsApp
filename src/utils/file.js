const path = require('path');
const fs = require('fs');
const api = require('../services/api');
const FormData = require('form-data');

async function uploadQrCode(){
  // Get file path
  const qrCode = path.join(__dirname, '..', '..', 'out.png');
  
  // New object form-data
  const formData = new FormData();

  formData.append('image', fs.createReadStream(qrCode));

  // Configuring the request header
  const config = {
    headers: formData.getHeaders()
  }

  // Sending file for API
  await api.post('chatbot', formData, config);
}

module.exports = {
  uploadQrCode
}