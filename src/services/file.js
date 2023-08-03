import part from 'path'

export const uploadSingleFile = async (fileObject) => {
    try {
        const extname = part.extname(fileObject.name);
        const basename = part.basename(fileObject.name,extname);
        
        const newName = `${basename}-${Date.now()}${extname}`
        const path = `${__dirname}/../public/images/uploads/${newName}`;
        
        let response = await fileObject.mv(path);
        
        return {
            status:'success',
            err:0,
            path:newName
        };
    } catch (error) {
        return {
            err:1,
            mes:error
        }
    }
}

export const uploadMultipleFile = async (file) => {
    try {
        let result = []
        let quantity = 0;
        for (let i = 0; i < file.length; i++) {
            const extname = part.extname(file[i].name);
            const basename = part.basename(file[i].name, extname);

            const newName = `${basename}-${Date.now()}${extname}`;
            const path = `${__dirname}/../public/images/uploads/${newName}`;

            try {
                await file[i].mv(path);
                result.push({
                    status: 'success',
                    err: 0,
                    path: newName
                });
                quantity++;
            } catch (error) {
                result.push({
                    status: 'success',
                    err: error,
                    path: newName
                });
            }
        }
        
        return {
            quantity:quantity,
            data:result
        };
    } catch (error) {
        return {
            err:1,
            mes:error
        }
    }
}