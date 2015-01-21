class SchoolsController < ApplicationController

	def index 
		@schools = School.all
		render json: @schools
	end

	def create
		@school = School.create(school_params)
		render json: @school
	end

	def update
		@school = School.find(params[:id])
		@school.update(school_params)
		render json: @school
	end

	def destroy
		@school = School.find(params[:id])
		@school.destroy
		render json: {status: "It's all good in the noodlehood."}
	end
	
	private

	def school_params
		params.require(:school).permit(:name, :description, :logo)
	end

end

