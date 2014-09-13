class SlidesController < ApplicationController
  def index
    @slides = Slide.all
    puts "=========test========="
  end

  def new
  end

  def show
    
  end

  def edit
  end

  def destroy
  end
end
