import { createContext } from "react";
import { useReducer } from "react";
import axios from "axios";

const LineChartContext = createContext({
    allData: [],
    allDataOfV2: [],
    allDataOfV3: [],
    allDataOfV4: [],
    allDataOfV5: [],
    allDataOfV6: [],
    allDataOfV7: [],
    fetchAllData: () => {},
    fetchAllDataOfV3: () => {}
});

const API_URL = "/v1/";
const API_SECOND_URL_OF_V1 = "/v1vi/";
const API_URL_OF_V2 = "/v2/";
const API_URL_OF_V3 = "/v3/";
const API_URL_OF_V4 = "/v4/";
const API_URL_OF_V5 = "/v5/";
const API_URL_OF_V6 = "/v6/";
const API_URL_OF_V7 = "/v7/";
 
const lineChartReducer = (state, action) => {

    switch (action.type) {
        case "ALL_DATA": {
            return {
                ...state,
                allData: action.payload
            }
        }
        case "ALL_DATA_OF_V2":
            return {
                ...state,
                allDataOfV2: action.payload
            }
        case "ALL_DATA_OF_V3": 
            return {
                ...state,
                allDataOfV3: action.payload
            }
            case "ALL_DATA_OF_V4": 
            return {
                ...state,
                allDataOfV4: action.payload
            }
        case "ALL_DATA_OF_V5":
            return {
                ...state,
                allDataOfV5: action.payload
            }
        case "ALL_DATA_OF_V6":
            return {
                ...state,
                allDataOfV6: action.payload
            }
            case "ALL_DATA_OF_V7":
                return {
                    ...state,
                    allDataOfV7: action.payload
                }
        default: 
            return state
    }
};

export const LineChartProvider = ({children}) => {

    let initialState = {
        allData: [],
        allDataOfV2: [],
        allDataOfV3: [],
        allDataOfV4: [],
        allDataOfV5: [],
        allDataOfV6: [], 
        allDataOfV7: [] 
    };
    let [state, dispatch] = useReducer(lineChartReducer, initialState);

    const fetchAllData = async () => {

        let response = await axios.get(API_SECOND_URL_OF_V1);

        let data = response.data;

        dispatch({
            type: "ALL_DATA",
            payload: data
        })

    }; 

    const fetchAllDataOfV2 = async () => {
        let response = await axios.get(API_URL_OF_V2 + "all");

        let data = response.data;

        dispatch({
            type: "ALL_DATA_OF_V2",
            payload: data
        })
    };

    const fetchAllDataOfV3 = async () => {

        let response = await axios.get(API_URL_OF_V3 + "all");

        let data = response.data;

        dispatch({
            type: "ALL_DATA_OF_V3",
            payload: data
        })
    };
    const fetchAllDataOfV4 = async () => {

        let response = await axios.get(API_URL_OF_V4 + "all");

        let data = response.data;

        dispatch({
            type: "ALL_DATA_OF_V4",
            payload: data
        })
    };

    const fetchAllDataOfV5 = async () => {
        let response = await axios.get(API_URL_OF_V5 + "all");

        let data = response.data;

        dispatch({
            type: "ALL_DATA_OF_V5",
            payload: data
        })
    };

    const fetchAllDataOfV6 = async () => {
        let response = await axios.get(API_URL_OF_V6 + "all");

        let data = response.data;

        dispatch({
            type: "ALL_DATA_OF_V6",
            payload: data
        })
        
    };

    const fetchAllDataOfV7 = async () => {
        let response = await axios.get(API_URL_OF_V7 + "all");

        let data = response.data;

        dispatch({
            type: "ALL_DATA_OF_V7",
            payload: data
        })
        
    };



    return (<LineChartContext.Provider value={{
        allData: state.allData,
        fetchAllData: fetchAllData, 

        allDataOfV2: state.allDataOfV2,
        fetchAllDataOfV2: fetchAllDataOfV2,

        allDataOfV3: state.allDataOfV3,
        fetchAllDataOfV3: fetchAllDataOfV3,

        allDataOfV4: state.allDataOfV4,
        fetchAllDataOfV4: fetchAllDataOfV4,

        allDataOfV5: state.allDataOfV5,
        fetchAllDataOfV5: fetchAllDataOfV5,

        allDataOfV6: state.allDataOfV6,
        fetchAllDataOfV6: fetchAllDataOfV6,

        allDataOfV7: state.allDataOfV7,
        fetchAllDataOfV7: fetchAllDataOfV7
    }}>
        {children}
    </LineChartContext.Provider>)

};

export default LineChartContext;