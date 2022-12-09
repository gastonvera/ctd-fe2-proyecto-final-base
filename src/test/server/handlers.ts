import { rest } from "msw";
import { API_URL } from "../../app/constants";
import {
  citaBartJson,
  citaLisaJson,
  citaHomerJson,
  citaMargeJson,
} from "../mocks/citas.mocks";

const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    if (req.url.searchParams.get("character") === "homer") {
      return res(ctx.json(citaHomerJson));
    } else if (req.url.searchParams.get("character") === "marge") {
      return res(ctx.json(citaMargeJson));
    } else if (req.url.searchParams.get("character") === "lisa") {
      return res(ctx.json(citaLisaJson));
    } else if (req.url.searchParams.get("character") === "bart") {
      return res(ctx.json(citaBartJson));
    }
    return res(ctx.json([]));
  }),
];

export default handlers;
