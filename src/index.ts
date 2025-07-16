import { getRandom } from "./macros" with { type: "macro" };

export function GET() {
  return new Response(getRandom().toString());
}
