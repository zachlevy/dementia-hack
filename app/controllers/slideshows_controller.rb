class SlideshowsController < ApplicationController
before_action :set_slideshow, only: [:show, :edit, :update, :destroy]

  def index
    @slideshows = Slideshow.all
  end

  def new
    @slideshow = Slideshow.new
  end

  def show
    #@slideshow = Slideshow.find(params[:id])
  end

  def edit
  end

  def destroy
  end

  def create
    redirect_to root_path
    @slideshow = Slideshow.new()

    if @slideshow.save
      puts "slideshow saved"
    end
  end
  private
    def set_slideshow
      @slideshow = Slideshow.find(params[:id])
    end
end
