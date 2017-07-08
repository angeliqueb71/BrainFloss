require 'test_helper'

class LifeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get life_index_url
    assert_response :success
  end

end
