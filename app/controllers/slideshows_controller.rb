class SlideshowsController < ApplicationController
  def index
    @slideshows = Slideshow.all
  end

  def new
    @slideshow = Slideshow.new
  end

  def show
    @slideshow = Slideshow.find(params[:id])
  end

  def edit
  end

  def destroy
  end
end
