class SlidesController < ApplicationController
  def index
    @slides = Slide.all
  end

  def new
    @slide = Slide.new
    puts "new slide page"
  end

  def show
    @slide = Slide.find(params[:id])
  end

  def edit
    @slide = Slide.find(params[:id])
  end

  def destroy
  end

  def create
    redirect_to root_path
    @slide = Slide.new(slide_params)

    if @slide.save
      puts "slide saved"
    end
  end

  def update
    @slide.update(slide_params)
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def slide_params
      params.require(:slide).permit(
          :slide_html,
          :slide_weight,
          :slide_length,
          :slideshow_id,
        )
    end
end
