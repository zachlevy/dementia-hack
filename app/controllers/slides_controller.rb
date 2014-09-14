class SlidesController < ApplicationController
  before_action :set_slide, only: [:show, :edit, :update, :destroy]
  skip_before_filter  :verify_authenticity_token

  def index
    @slides = Slide.all
  end

  def new
    #@slideshow = Slideshow.find(params[:slideshow])
    @slide = Slide.new
    puts "new slide page"
  end

  def show
  end

  def edit
  end

  def destroy
    redirect_to root_path
    @slide.destroy
  end

  def create
    redirect_to root_path
    @slide = Slide.new(slide_params)

    if @slide.save
      puts "slide saved"
    end
  end

  def sms
    @message_body = params["Body"]
    @from_number = params["From"]
    redirect_to root_path
    puts "========received SMS======="
    puts @message_body
    puts @from_number
    @slide = Slide.new
    @slide.slide_html = "<div class=\"slide-text-message\"><div class=\"text-image-wrap\"><img src=\"http://i.imgur.com/TSLf8Dh.png\" class=\"img-responsive img-circle text-image\" /></div><h1 class=\"text-message speak-this\">" + @message_body + "</h1><p class=\"text-from\">" + @from_number + "</p></div>"
    @slide.slide_weight = 5
    @slide.slide_length = 5000
    
    @slideshows = Slideshow.all
    @slideshows.each do |slideshow|
      if "sent from +1" + slideshow.phonenumber.to_s == @from_number
        puts "======= whitelisted number ======="
        @slide.slideshow_id = slideshow.id
      else
        @slide.slideshow_id = 3
        puts "======= not a whitelisted number ======="
      end
    end
    if @slide.save
      puts "text message slide saved"
    end
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
