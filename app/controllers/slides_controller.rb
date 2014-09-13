class SlidesController < ApplicationController
  before_action :set_slide, only: [:show, :edit, :update, :destroy, :join]

  def index
    @slides = Slide.all
  end

  def new
    @slide = Slide.new
    puts "new slide page"
  end

  def show
  end

  def edit
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

  def sms
    redirect_to root_path
    puts "========revceived SMS======="
  end

  def update
    redirect_to root_path
    @slide.update(slide_params)
  end

  private
    def set_slide
      @slide = Slide.find(params[:id])
    end
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
