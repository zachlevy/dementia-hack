class SlidesController < ApplicationController
  def index
    @slides = Slide.all
  end

  def new
    @slide = Slide.new
  end

  def show
    @slide = Slide.find(params[:id])
  end

  def edit
  end

  def destroy
  end
end
