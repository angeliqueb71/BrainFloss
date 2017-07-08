require 'test_helper'

class BeautysControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get beautys_index_url
    assert_response :success
  end

end
