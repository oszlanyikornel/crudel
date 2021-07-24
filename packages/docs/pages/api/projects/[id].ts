// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
	id: number;
};

type SuccesData = {
	succes: boolean;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data[] | SuccesData>
) {
	const datas: Data[] = [{ name: "John Doe", id: 1 }];
	switch (req.method) {
		case "PUT":
			console.log("put");
			const id = req.query.id;
			console.log(id);
			const newData2 = req.body;
			console.log(newData2);
			return res.status(201).json({ succes: true });
		case "DELETE":
			console.log("del");
			const id2 = req.query.id;
			console.log(id2);
			return res.status(201).json({ succes: true });

		default:
			return res.status(200).json({ succes: false });
	}
}
