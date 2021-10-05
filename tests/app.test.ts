import {mocking} from "../src/app"
import fetchMock from "jest-fetch-mock";
jest.mock("../src/app.ts")
fetchMock.enableMocks();

describe("api fetched or not",function()
{
    
    it("failedcase",function () {
        
        fetchMock.mockReject(() =>mocking().then(() => 
        {
            Promise.reject("failed")
            expect.assertions(1)

        } ))    
        
    })
    it("success case",function (){
        
        fetchMock.mockResponse(() => mocking().then(() => {
            expect.assertions(1)
            return "success"}
        ))
        
    })
    
    
})   

