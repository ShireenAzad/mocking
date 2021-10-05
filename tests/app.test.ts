import {mocking} from "../src/app"
import fetchMock from "jest-fetch-mock";
jest.mock("../src/app.ts")
fetchMock.enableMocks();

describe("api fetched or not",function()
{
    
    it("failedcase",async function ():Promise<any> {
        
        fetchMock.mockReject(() =>mocking().then(() => 
        {
            Promise.reject("failed")
            expect.assertions(1)

        } ))    
        
    })
    it("success case",async function (): Promise<any>{
        
        fetchMock.mockResponse(() => mocking().then(() => {
            expect.assertions(1)
            return "success"}
        ))
        
    })
    
    
})   

