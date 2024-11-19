import Tesseract from 'tesseract.js'
import fs from 'fs';
export const uploadFile=async(req,resp)=>{
    const imagePath = req.file.path;
    const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
    try {
        const lines = text.split('\n');
        const extractedData = {
            title:lines[0],
            licenceNo: lines.find(line => line.includes('LICENCE NO.'))?.split('LICENCE NO.')[1]?.trim(),
            name: lines.find(line => line.includes('NAME'))?.split('NAME')[1]?.trim(),
            sonOfDoOf:lines.find(line => line.includes('SONOF DIO'))?.split('SONOF DIO')[1]?.trim(),
            dob: lines.find(line => line.includes('DOB'))?.split('DOB')[1]?.trim(),
            address:lines.find(line => line.includes('ADDRESS'))?.split('ADDRESS')[1]?.trim(),
            dist:lines.find(line => line.includes('DISTT'))?.split('DISTT')[1]?.trim(),
            iss: lines.find(line => line.includes('eu Mv.comMm'))?.split('eu Mv.comMm')[1]?.trim(),
            exp: lines.find(line => line.includes('Valid Upto'))?.split('Valid Upto')[1]?.trim(),
          };
        fs.unlinkSync(imagePath);
        return resp.json({ message: 'Document data extracted successfully', data: extractedData });
    } catch (error) {
       return resp.status(500).json({ error: error.message });
    }
}

export const showData=(req,resp)=>{
    return resp.status(200).json({
        message:"File data will show here",
        status:200,
        success:true
    });
}