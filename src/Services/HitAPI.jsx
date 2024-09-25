import axios from "axios";
import { baseUrl } from "../config/config";

export const hitApi = axios.create({
  baseURL: baseUrl,
});
