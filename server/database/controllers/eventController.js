const EventService = require("../services/eventService");

class EventController {

	static async createEvent(req, res, next){
		try {
			const newEvent = req.body;
			console.log(newEvent);
			const result = await EventService.createEvent({newEvent});
			res.status(201).json(result);
		} catch (error) {
			next(error);
		}
	}

	static async getAllEvent(req, res, next){
		try {
			const result = await EventService.getAllEvent();
			res.status(200).json(result);
		} catch (error) {
			next(error)
		}
	}
	
	static async getCategoryEvent(req, res, next){ //장르별 조회
		try {
			const options = req.query;
			console.log("options: ", options);
			const result = await EventService.getCategoryEvent(options);
			console.log(result);
			if (result.errorMessage) {
				console.log('에러걸림');
        throw new Error(result.errorMessage)
      }
			
			res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	}

	// static async getSearchEvent(req, res, next){ //장르별 조회
	// 	try {
	// 		const input = req.params.input;
	// 		console.log("input: ", input);
	// 		const result = await EventService.getSearchEvent(input);
	// 		console.log(result);
	// 		if (result.errorMessage) {
	// 			console.log('에러걸림');
  //       throw new Error(result.errorMessage)
  //     }
			
	// 		res.status(200).json(result);
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// }
	
	static async getOneEvent(req, res, next){
		try {
			const event_id = req.params.event_id;
			const result = await EventService.getOneEvent({event_id});
			res.status(200).json(result);
		} catch (error) {
			next(error)
		}
	}

	static async updateEvent(req, res, next){
		try {
			const event_id = req.params.event_id;
			const {...props} = req.body;
        const toUpdate = {...props}

			const result = await EventService.updateEvent({ event_id, toUpdate });
			res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	}

	static async deleteEvent(req, res, next){
		try {
			const event_id = req.params.event_id;

			const result = await EventService.deleteEvent({ event_id });
			res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	}

}

module.exports = EventController;