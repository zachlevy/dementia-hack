class SlideshowsController < ApplicationController
  def index
  end

  def new
  end

  def show
    @slideshow = Slideshow.find(params[:id])
  end

  def edit
  end

  def destroy
  end
end
