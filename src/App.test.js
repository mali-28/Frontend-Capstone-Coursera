import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { fetchAPI } from './utils/apiMock';
import Card from './components/Card';
test('Renders the BookingForm heading', () => {
    const details ={
        date: (new Date()).toISOString().slice(0,10),
        time: "",
        no_seat: 0,
        occasion: ""
    }
    const resetForm = () => {
        details.date = (new Date()).toISOString().slice(0,10)
        details.time = ""
        details.no_seat = 0
        details.occasion =  ""
    }
    render(<BookingForm timeSlot={fetchAPI(new Date(details.date)) } details={details} resetForm={resetForm}/>);
    const headingElement = screen.getByText("Date:");
    expect(headingElement).toBeInTheDocument();
})

test('renders form with inputs and submit button', () => {
    const details ={
        date: (new Date()).toISOString().slice(0,10),
        time: "",
        no_seat: 0,
        occasion: ""
    }
    const resetForm = () => {
        details.date = (new Date()).toISOString().slice(0,10)
        details.time = ""
        details.no_seat = 0
        details.occasion =  ""
    }
    render(<BookingForm timeSlot={fetchAPI(new Date(details.date)) } details={details} resetForm={resetForm}/>);
  // find form elements
  const dateInput = screen.getByLabelText('Date:');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  // verify form elements are visible and enabled
  expect(dateInput).toBeVisible();
  expect(dateInput).toBeEnabled();
  expect(timeSelect).toBeVisible();
  expect(timeSelect).toBeEnabled();
  expect(guestsInput).toBeVisible();
  expect(guestsInput).toBeEnabled();
  expect(occasionSelect).toBeVisible();
  expect(occasionSelect).toBeEnabled();
  expect(submitButton).toBeVisible();
  expect(submitButton).toBeEnabled();
});


describe('Card component', () => {
    it('renders the card correctly', () => {
      const image = 'https://example.com/image.jpg';
      const title = 'Greek Salad';
      const price = 10;
      const description =
        'Fresh and delicious salad with tomatoes, cucumbers, olives, and feta cheese.';
      render(
        <Card
          image={image}
          title={title}
          price={price}
          description={description}
        />
      );
  
      const titleElement = screen.getByText(title);
      const priceElement = screen.getByText(`${price || ""}`);
      const descriptionElement = screen.getByText(description);
      expect(titleElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(screen.getByAltText(title)).toHaveAttribute('src', image);
    });
  });
  