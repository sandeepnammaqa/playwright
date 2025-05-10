const {test,expect,request}=require('@playwright/test');


test.only('Api testing using playwright',async({page})=>{
        const apicontext=request.newContext();
        //get ,post,put,delete
        //(await apicontext).get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
        const response=await (await apicontext).get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
        console.log(response.status());
        console.log(response.statusText());
        console.log(response.ok());
        console.log(response.headers());
        
})